Rails.application.routes.draw do
  resources :tickets
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'login#root'
  get '/login' => 'login#loadLogin'
  get '/dashboard' => 'dashboard#loadDashboard'
  get '/authenticate', to: 'login#authenticate'
  get '/resend_mail', to: 'login#resend_mail'
  get '/authorize/:key', to: 'login#authorize'
end
