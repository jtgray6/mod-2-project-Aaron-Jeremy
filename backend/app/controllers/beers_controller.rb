class BeersController < ApplicationController
    def index
        if params[:search]
            @beers = Beer.where("name LIKE ?", "%#{params[:search]}%") && Beer.where("brewery LIKE ?", "%#{params[:search]}%")
        else
            @beers = Beer.all
        end
        
        render json: @beers, include: :style
        # redirect_to 'localhost:3000/show_beer.html'
    end

    def show
        @beer = Beer.find(params[:id])
        render json: @beer, include: [:style, :reviews => {include: :user}]
    end
end
