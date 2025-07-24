class ChangeAllDayDefaultOnSchedules < ActiveRecord::Migration[6.1]
  def change
    change_column_default :schedules, :all_day, from: nil, to: false
    change_column_null :schedules, :all_day, false, false
  end
end
