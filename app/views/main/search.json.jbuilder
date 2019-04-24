json.dictionaries do
  json.array!(@dictionaries) do |dictionary|
    json.word dictionary.word
    json.definition dictionary.definition
  end
end
