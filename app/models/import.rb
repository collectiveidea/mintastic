class Import
  include ActiveModel::Model
  include Virtus.model

  attribute :file_name
end