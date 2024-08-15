Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'login#root'
  get 'login' => 'login#loadLogin'
  get '/authenticate', to: 'login#authenticate'
  get '/resend_mail', to: 'login#resend_mail'
end
