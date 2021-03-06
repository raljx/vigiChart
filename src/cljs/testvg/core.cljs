(ns testvg.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType]

              [testvg.api :refer [get-statistics-authors]]
              [testvg.api :refer [get-statistics-messages]]
              )
    (:require-macros
      [cljs.core.async.macros :refer [go alt!]])
    (:import goog.History))

;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Welcome to testvg"]
  [:p "Appel de l'API Vigiglobe (api.vigiglobe.com)"]
	[:p "L'appel est instancié dans le fichier api.cljs"]
  [:div [:a {:href "#/chart"} "go to chart page"]]
  
])


(defonce state (atom {:start     nil
                      :end       nil
                      :max-range 3600000}))
(defonce counter (atom 0))

(defn chart-page []
  [:div [:h2 "Appel a l'API VigiGlobe"]

    [:p "Press F5 to load"]
   [:div [:a {:href "#/"} "go to homepage"]]
    [:div#container {:style {:min-width "310px" :max-width "800px"
                            :height    "400px" :margin "0 auto"}}]
                            
    [:div#container-messages {:style {:min-width "310px" :max-width "800px"
                            :height    "400px" :margin "0 auto"}}]
 
 
     [:div#container-authors {:style {:min-width "310px" :max-width "800px"
                            :height    "400px" :margin "0 auto"}}]                           
                            ])

(defn get-highcharts []
  (aget js/Highcharts "charts" @counter)  
)

(defn update-range [range]
  (.update (aget (get-highcharts) "xAxis" 0) (clj->js {:minRange range :range range}))
)

(defn add-point-all [data]
  (let [date (.parse js/Date (first data))
        value (second data)
        start (:start @state)]
    (if start
      (-> (- date start)
          (min (:max-range @state))
          (update-range))
      (swap! state assoc :start date))

(.addPoint (aget (get-highcharts) "series" 0)

               (clj->js [date value])
)

)
  )
  
(defn add-point-messages [data]
  (let [date (.parse js/Date (first data))
        value (second data)
        start (:start @state)]
    (if start
      (-> (- date start)
          (min (:max-range @state))
          (update-range))
      (swap! state assoc :start date))

(.addPoint (aget (get-highcharts) "series" 1)

               (clj->js [date value])
)

)
  )
  
  (defn add-point-authors [data]
  (let [date (.parse js/Date (first data))
        value (second data)
        start (:start @state)]
    (if start
      (-> (- date start)
          (min (:max-range @state))
          (update-range))
      (swap! state assoc :start date))

(.addPoint (aget (get-highcharts) "series" 2)

               (clj->js [date value])
)

)
  )

(defn get-stat[]
	(.setInterval js/window #(go (add-point-authors ( <! (get-statistics-authors[])))) 3000)
	(.setInterval js/window #(go (add-point-messages ( <! (get-statistics-messages[])))) 3000)
	(.setInterval js/window #(go (add-point-all ( <! (get-statistics-all[])))) 3000)
)
 

(def chart-config
  {:chart       {:type   "spline"
                 :events {:load (get-stat)}
                                                            
                }
   :title       {:text "API Vigiglobe / Statistics Volume"}
   :xAxis       {:type "datetime",
                 :tickPixelInterval 100}
   :yAxis       {:plotLines [{:value 1
                              :width 4
                              :color "#00FF00"}]}
   :plotOptions {:bar {:dataLabels {:enabled true}}}
   :credits     {:enabled true}
   :series      [		{:name "Volume global"}
							{:name "Par messages"}
							{:name "Par auteurs"}]
   }
)

(defn chart-did-mount []
  (do
    (js/$ (fn []
            (.highcharts (js/$ "#container")
                         (clj->js chart-config)))))
  )

(defn chart-component []
  (reagent/create-class {:reagent-render     chart-page
                        :component-did-mount chart-did-mount})
)

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/chart" []
  (session/put! :current-page #'chart-page))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))
  
  (reagent/render [chart-component] (.getElementById js/document "app"))

(defn init! []
  (hook-browser-navigation!)
  (mount-root))

(defn on-js-reload []
  (swap! counter inc)
  (.log js/console @counter))
