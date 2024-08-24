module ApplicationHelper
        def truncate_text(_str, char=8, flag = true)
            return _str.length > char ? _str.to_s[0...char]+(flag ? "..." : "") : _str
        end

    def truncate_email(_str, char=8, flag = true)
        if _str.include?('@')
            return _str.split('@').first
        else
            return truncate_text(_str,char,flag)
        end
    end

    def sanitize_content(_str)
        return raw sanitize(_str)
    end

    def str_concat(_prefix, _suffix = ':')
        return _prefix+" #{_suffix}"
    end
end
