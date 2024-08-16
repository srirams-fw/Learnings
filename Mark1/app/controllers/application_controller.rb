class ApplicationController < ActionController::Base
    before_action :check_user, except: [:root, :loadLogin, :sendAuthMail, :authenticate, :resend_mail, :authorize]

    def check_user
        if session[:current_user_id] == nil
            set_defaults
            redirect_to '/'
        end
    end

    def setLang(_selectedLang)
        case _selectedLang
            when "en-US"
                _lang= :en
            when "fr-fr"
                _lang= :fr
            else
                _lang= :en
        end
        I18n.locale = _lang
        #redirect_to request.referrer
    end
    
    def set_defaults
        setLang('en-US')
        #reset_session
    end
end
