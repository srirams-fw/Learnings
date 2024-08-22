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
  delete '/logout', to: 'application#logout'
end
