export const helpers = {
  isPalindrome:
`public bool IsPalindrome(string value)
{
  var valueNoWhitespaceOrPunctuation = string.Concat(value
    .Where(c => !char.IsWhiteSpace(c) && !char.IsPunctuation(c)))
    .ToLower();
  return _IsPalindrome(valueNoWhitespaceOrPunctuation);

  static bool _IsPalindrome(string value)
  {
    if (value[0] == value[^1])
    {
      if (value.Length > 2)
      {
        var trimmedValue = value[1..^1];
        return _IsPalindrome(trimmedValue);
      }
      else
      {
        return true;
      }
    }
    else
    {
      return false;
    }
  }
}`,
}