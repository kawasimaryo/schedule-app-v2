# config/initializers/webpacker_logger_patch.rb

require 'logger'

if defined?(ActiveSupport::LoggerThreadSafeLevel) &&
   !ActiveSupport::LoggerThreadSafeLevel.const_defined?(:Logger)
  ActiveSupport::LoggerThreadSafeLevel.const_set(:Logger, ::Logger)
end


