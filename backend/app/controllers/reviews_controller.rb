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
        @new_review = Review.create(
            description: params[:description],
            rating: params[:rating],
            beer: @beer
        )

        redirect_to 'http://localhost:3000/home.html'
    end
end
