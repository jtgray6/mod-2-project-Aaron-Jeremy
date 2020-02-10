class ReviewsController < ApplicationController
    def index
        @reveiws = Review.all
        render json: @reveiws
    end

    def show
        @review = Review.find(params[:id])
        render json: @review
    end
end
