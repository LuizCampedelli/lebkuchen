class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash[:notice] = t("messagesent")
    else
      flash[:alert] = t("messageerror")
    end
    redirect_to contacts_path # Use 'redirect_to' and the route helper
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message, :nickname)
  end

end
