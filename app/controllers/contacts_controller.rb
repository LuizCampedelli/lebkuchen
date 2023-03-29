class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact_form])
    if @contact.deliver
      flash[:success] = "Obrigado por entrar em contato conosco! Responderemos em breve."
      redirect_to root_path
    else
      flash[:error] = "Houve um erro ao enviar a mensagem. Por favor, tente novamente."
      render :new
    end
  end
end
