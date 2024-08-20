module ApplicationHelper
    def truncate_text(str, char=8, flag = true)
        return str.length > char ? str.to_s[0...char]+(flag ? "..." : "") : str
    end
end
