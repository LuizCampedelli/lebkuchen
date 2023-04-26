class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash[:notice] = "Message sent"
    else
      flash[:error] = "Houve um erro ao enviar a mensagem. Por favor, tente novamente."
    end
    redirect_to new_contact_path # Use 'redirect_to' and the route helper
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message, :nickname)
  end
  
end
