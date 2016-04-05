class ImportsController < ApplicationController
  def new
    @import = Import.new
  end

  def create
    Rails.logger.debug("#{params}")
  end
end