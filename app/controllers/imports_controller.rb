class ImportsController < ApplicationController
  def new
    @import = Import.new
  end
end