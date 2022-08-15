class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end



[POST] api/users: "users#create" (signup),
[POST] api/session: "sessions#create" (login),
[DELETE] api/session: "sessions#destroy" (logout)