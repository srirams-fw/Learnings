Rails.application.routes.draw do
  mount_ember_app :frontend, to: "/dashboard"
  #mount_ember_app :frontend, to: "/dashboard", controller: "ember", action: "index", constraints: Workspace::Path::WebPath.new
  resources :tickets
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'login#root'
  get '/login' => 'login#loadLogin'
  get '/authenticate', to: 'login#authenticate'
  get '/resend_mail', to: 'login#resend_mail'
  get '/authorize/:key', to: 'login#authorize'
  post '/set_language', to: 'application#set_lang'
  post '/set_theme', to: 'application#set_color_theme'
  delete '/logout', to: 'application#logout'
  post '/fetch_tickets', to: 'tickets#fetch_tickets'
  post '/search_tickets', to: 'tickets#search_tickets'
  get '/dashboard_data', to: 'tickets#get_dashboard_data'
  get '/get_session', to: 'application#get_session_info'
  get 'translations/:locale', to: 'translations#show'
  post '/create_comment', to: 'tickets#create_comment'
end
