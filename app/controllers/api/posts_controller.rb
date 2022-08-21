class Api::PostsController < ApplicationController
    validates :post_model


    def index
        @posts = Posts.all
        render json: @posts
    end

    def create

        @post = Post.new(post_params)
        
        if @post.save 
            render json: @post
        else
        render json: @post.errors, status: :unprocessable_entity
        end
        
    end

    def show

    end

    def update

    end


    private

    def post_params
        params.require(:post).permit(:title, :body, :author_id)

    end
    

end
