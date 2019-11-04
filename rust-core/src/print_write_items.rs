use super::StringRef;
use super::WriteItem;
use std::rc::Rc;

pub struct PrintWriteItemsOptions {
    /// The number of spaces to use when indenting when use_tabs is false,
    /// otherwise the number of columns to count a tab for when use_tabs is true.
    pub indent_width: u8,
    /// Whether to use tabs for indenting.
    pub use_tabs: bool,
    /// The newline character to use when doing a new line.
    pub newline_kind: &'static str,
}

/// Prints string based writer items.
pub fn print_write_items<T>(write_items: Vec<WriteItem<T>>, options: PrintWriteItemsOptions) -> String where T : StringRef {
    let mut final_string = String::new();
    let indent_string = if options.use_tabs { String::from("\t") } else { " ".repeat(options.indent_width as usize) };

    for item in write_items.into_iter() {
        match item {
            WriteItem::Indent => final_string.push_str(&indent_string),
            WriteItem::NewLine => final_string.push_str(&options.newline_kind),
            WriteItem::Tab => final_string.push_str("\t"),
            WriteItem::Space => final_string.push_str(" "),
            WriteItem::String(text) => {
                let moved_text = Rc::try_unwrap(text).ok().unwrap();
                final_string.push_str(&moved_text.get_text())
            },
        }
    }

    final_string
}
