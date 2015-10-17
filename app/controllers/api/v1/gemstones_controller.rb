module API
  module V1
    class GemstonesController < ApplicationController
      skip_before_action :authenticate_user!, only: [:index, :show]
      respond_to :json

      def index
        @gemstones = Gemstone.includes(:images, :reviews).all
        render json: {url: api_v1_gemstones_path, gemstones: @gemstones.as_json(include: [:images, :reviews]) }
        #p "loaded the path yet?"
      end

      def show
        respond_with Gemstone.find(params[:id])
      end

      def create
        gemstone = Gemstone.new(gemstone_params)
        if gemstone.save
          render json: {url: gemstone_path(gemstone), gemstone: gemstone }, status: :created
        else
          render json: gemstone.errors, status: :unprocessable_entity
        end
      end

      def update
        respond_with Gemstone.update(params[:id], gemstone_params)
      end

      def destroy
        respond_with Gemstone.destroy(params[:id])
      end

      private

      def gemstone_params
        params.require(:gemstone).permit(:name, :description, :shine, :price, :rarity, :color, :faces)
      end
    end
  end
end
