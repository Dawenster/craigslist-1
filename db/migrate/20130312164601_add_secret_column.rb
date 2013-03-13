class AddSecretColumn < ActiveRecord::Migration
  def change
    add_column :posts, :secret_url, :string
  end
end
