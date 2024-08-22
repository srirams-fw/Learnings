module ApplicationHelper
    def truncate_text(_str, char=8, flag = true)
        return _str.length > char ? _str.to_s[0...char]+(flag ? "..." : "") : _str
    end

    def sanitize_content(_str)
        return raw sanitize(_str)
    end

    def str_concat(_prefix, _suffix = ':')
        return _prefix+" #{_suffix}"
    end
end
