class Schedule < ApplicationRecord
  # バリデーション
  validates :title, presence: { message: 'を入力してください' },
                    length: { maximum: 20, message: 'は20文字以内で入力してください' }

  validates :start_time, presence: { message: 'を入力してください' }
  validates :end_time, presence: { message: 'を入力してください' }

  validates :description, length: { maximum: 500, message: 'は500文字以内で入力してください' }

  validate :end_time_after_start_time

  private

  # 開始日より終了日が前になっていないかチェック
  def end_time_after_start_time
    if start_time.present? && end_time.present? && end_time < start_time
      errors.add(:end_time, 'は開始日以降の日付にしてください')
    end
  end
end

