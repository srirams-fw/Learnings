class LoginController < ApplicationController
    def root
        redirect_to '/login'
    end

    def loadLogin
        render :action => :index
    end

    def authenticate
       @email = params[:email]
       if @email.length <=0  
            @empty= true
            redirect_to '/login'
       else
            @mailSent = true
            AuthenticationMailer.auth_email(@email).deliver_now
            render :action => :index
            #send mail
       end
        
    end

    def resend_mail
        @email = params[:email]
        if @email.length > 0
            @resend_mail = true
            AuthenticationMailer.auth_email(@email).deliver_now
        else
            puts '>>>Resend email is empty'
        end
    end

end
