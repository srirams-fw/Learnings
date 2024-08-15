class AuthenticationMailer < ApplicationMailer
    default from: 'sriram.rsrc@gmail.com' # Set a default sender email

  def auth_email(user,hash)
    #@user = user
    @user = user
    @hash = hash
    mail(to: @user, subject: 'Login to FreshIMS')
  end
end
