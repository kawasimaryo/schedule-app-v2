# モンキーパッチ: Logger が未定義の場合に標準ライブラリの Logger を割り当てる
require 'logger'
unless defined?(Logger)
  Logger = ::Logger
end

