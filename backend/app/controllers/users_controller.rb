class UsersController < ApplicationController
    def index
        if params[:username] && params[:password]
            @user = User.find_by(username: params[:username], password: params[:password])
            if @user
                redirect_to "http://localhost:3000/home.html?id=#{@user.id}"
            else
                redirect_to 'http://localhost:3000/index.html?login-error=true'
            end
        else
            redirect_to 'http://localhost:3000/index.html'
        end

        # @users = User.all
        # render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def create
        @new_user = User.new(
            username: params[:username],
            password: params[:password]
        )

        if @new_user.valid?
            @new_user.save
            redirect_to 'http://localhost:3000/index.html'
        else
            redirect_to 'http://localhost:3000/signUp.html?failure=true'
            # render json: { error: @new_user.errors.full_messages }
        end
    end
end
