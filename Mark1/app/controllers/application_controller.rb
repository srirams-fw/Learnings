class ApplicationController < ActionController::Base
    def setLang(_selectedLang)
        case _selectedLang
            when "val1"
                _lang= :en
            when "val2"
                _lang= :fr
            else
                _lang= :en
        end
        I18n.locale = _lang
    end
    #redirect_to request.referrer
end
