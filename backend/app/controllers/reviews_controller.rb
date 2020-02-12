class ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render json: @reviews, include: [:user, :beer => {include: :style}]
    end

    def show
        @review = Review.find(params[:id])
        render json: @review
    end

    def create
        @beer = Beer.create(
            name: params[:name],
            brewery: params[:brewery],
            style_id: params[:style]
        )
        @user = User.find(params[:id])
        @new_review = Review.create(
            description: params[:description],
            rating: params[:rating],
            beer: @beer,
            user: @user
        )

        redirect_to "http://localhost:3000/home.html?id=#{@user.id}"
    end

    def destroy
        @delete_review = Review.find(params[:id])
        @delete_review.destroy
        @user = User.find(params[:user_id])

        redirect_to "http://localhost:3000/home.html?id=#{@user.id}"
    end
end
