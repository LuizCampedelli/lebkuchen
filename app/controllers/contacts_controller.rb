class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:error] = "Message sent"
    else
      flash.now[:error] = "Houve um erro ao enviar a mensagem. Por favor, tente novamente."
      render :new
    end
  end
end
