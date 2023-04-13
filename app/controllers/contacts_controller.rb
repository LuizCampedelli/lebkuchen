class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver

      flash.now[:sucess] = "Message sent"
      render :create
    else
      flash.now[:error] = "Houve um erro ao enviar a mensagem. Por favor, tente novamente."

    end
  end

end
