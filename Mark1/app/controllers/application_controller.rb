class ApplicationController < ActionController::Base
    before_action :check_user, except: [:root, :loadLogin, :sendAuthMail, :authenticate, :resend_mail, :authorize]
    before_action :set_locale

    def check_user
        if session[:current_user_id] == nil
            redirect_to '/'
        end
    end

    def set_lang
        _selectedLang = params[:locale]
        case _selectedLang
            when "en"
                _lang= :en
            when "fr"
                _lang= :fr
            else
                _lang= :en
        end
        I18n.locale = _lang
        session[:locale] = I18n.locale
        render json: { success: true, message: "Language changed successfully" }, status: :ok
        #redirect_to request.referrer
    end
    
    def set_locale
        I18n.locale = session[:locale] || I18n.default_locale
        @selectedLang = I18n.locale
        #reset_session
    end
end
