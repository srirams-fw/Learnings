class TranslationsController < ApplicationController

    def show
        locale = params[:locale] || I18n.default_locale
        case locale
            when 'en'
                locale = :en
            when 'fr'
                locale = :fr
            else
                locale = :en
        end
        translations = I18n.backend.send(:translations)[locale]
    
        render json: translations
      end

end
