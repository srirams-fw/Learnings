class AuthenticationMailer < ApplicationMailer
    default from: 'sriram.rsrc@gmail.com' # Set a default sender email

  def auth_email(user)
    #@user = user
    @user = user
    mail(to: @user, subject: 'Login to FreshIMS')
  end
end
