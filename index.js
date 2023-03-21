import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://gbnjqmdagzamlzzvhwxj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdibmpxbWRhZ3phbWx6enZod3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNTg3NzAsImV4cCI6MTk5MzczNDc3MH0.QPcsd2JCo0An-EFwpxNrXEhDm3qWJHrbzCE1OepHrqk'
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<li>${book.title} - ${book.author} - ${book.isbn}</li>`;}
