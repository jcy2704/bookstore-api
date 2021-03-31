Rails.application.routes.default_url_options[:host] = 'localhost:3001'

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :users, only: %w[show]
  end

  devise_for :users,
             defaults: { format: :json },
             path: '',
             path_names: {
               sign_in: 'api/login',
               sign_out: 'api/logout',
               registration: 'api/signup'
             },
             controllers: {
               sessions: 'sessions',
               registrations: 'registrations'
             }

  namespace :api do
    namespace :v1 do
      resources :books
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
