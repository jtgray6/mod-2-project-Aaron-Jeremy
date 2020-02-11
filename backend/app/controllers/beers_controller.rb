class BeersController < ApplicationController
    def index
        @beers = Beer.all
        render json: @beers, include: :style
    end

    def show
        @beer = Beer.find(params[:id])
        render json: @beer
    end
end
