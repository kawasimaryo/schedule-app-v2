# frozen_string_literal: true

ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __dir__)

require 'bundler/setup' # Set up gems listed in the Gemfile.
require 'bootsnap/setup' # Speed up boot time by caching expensive operations.

# 🔷 モンキーパッチ: Webpacker + Rails 6.1 + Ruby 2.7 Logger 未定義対策
require 'logger'
module ActiveSupport
  module LoggerThreadSafeLevel
    Logger = ::Logger unless const_defined?(:Logger)
  end
end
