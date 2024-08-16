require 'digest'

class LoginController < ApplicationController
    def root
        if session[:current_user_id] != nil
            redirect_to '/dashboard'
        else
            redirect_to '/login'
        end
    end

    def loadLogin
        if session[:current_user_id] != nil
            redirect_to '/dashboard'
        else
            render :action => :index
        end
    end

    def sendAuthMail(_email)
        session[:temp_mail_id] = _email
        _temp = Digest::MD5.hexdigest _email
        #AuthenticationMailer.auth_email(_email,_temp).deliver_now
    end

    def authenticate
        if session[:current_user_id] != nil
            redirect_to '/dashboard'
        else
            @email = params[:email]
            if @email.length <=0  
                    @empty= true
                    redirect_to '/login'
            else
                    @mailSent = true
                    sendAuthMail(@email)
                    render :action => :index
                    #send mail
            end
        end
    end

    def resend_mail
        @email = params[:email]
        if @email.length > 0
            @resend_mail = true
            sendAuthMail(@email)
        else
            puts '>>>Resend email is empty'
        end
    end

    def authorize
        @key = params[:key]
        _tempkey = Digest::MD5.hexdigest session[:temp_mail_id]
        if @key == _tempkey
            session[:current_user_id] = session[:temp_mail_id]
            redirect_to '/dashboard'
        end
    end

end
