class MainController < ApplicationController


  before_action :force_json, only: :search

  def index
  end

  def search
    @dictionaries = Dictionary.ransack(word_or_definition_cont: params[:q]).result(distinct: true).limit(5)
  end

  private

  def force_json
    request.format = :json
  end
end
