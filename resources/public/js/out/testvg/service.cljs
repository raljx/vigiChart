(ns testvg.service
  (:require
    [cljs.core.async :refer [chan close!]]
    [goog.net.XhrIo :as xhr])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]))

(def base-url "http://api.vigiglobe.com")
(def project-id "vgteam-TV_Shows")

(def statistics-all (str base-url "/api/statistics/v1/volume?project_id=" project-id))
(def statistics-authors (str base-url "/api/statistics/v1/volume?count=authors&project_id=" project-id))
(def statistics-messages (str base-url "/api/statistics/v1/volume?count=messages&project_id=" project-id))

(defn api-result [url extract-data-fn]
  (let [ch (chan)]
    (xhr/send url
              (fn [event]
                (let [res-text (-> event .-target .getResponseText)
                      res (-> (.parse js/JSON res-text)
                              (js->clj :keywordize-keys true)
                              (extract-data-fn))]
                  (go (>! ch res)
                      (close! ch)))))
    ch))

(defn get-statistics-volume []

(api-result statistics-all (fn [response]
                                    (let [data (first (:data response))]
                                      (do
                                        (.log js/console "global" (:data response))
                                        data))))
)

(defn get-statistics-authors []

(api-result statistics-authors (fn [response]
                                    (let [data (first (:data response))]
                                      (do
                                        (.log js/console "authors" (:data response))
                                        data))))
)

(defn get-statistics-messages []

(api-result statistics-messages (fn [response]
                                    (let [data (first (:data response))]
                                      (do
                                        (.log js/console "messages" (:data response))
                                        data))))
)
