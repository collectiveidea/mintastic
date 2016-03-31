class Import
  include Virtus.model
  include ActiveModel::Model
  include ActiveModel::Naming

  attribute :file_name
end