class Contact < MailForm::Base
  attr_accessor :name, :email, :message, :nickname

  attribute :name, validate: true
  attribute :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message, validade: true
  attribute :nickname, captcha: true
  # attribute :captcha, validate: /\A([\w\d]{6})\z/i

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      subject: "My Contact Form",
      to: "nataliabragancan@gmail.com",
      from: %("#{name}" <#{email}>)
    }
  end
end
