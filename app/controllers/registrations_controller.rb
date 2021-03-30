class RegistrationsController < Devise::RegistrationsController
  def create
    build_resource(sign_up_params)
    resource.save
    sign_up(resource_name, resource) if resources.persisted?

    render_jsonapi_response(resource)
  end
end
