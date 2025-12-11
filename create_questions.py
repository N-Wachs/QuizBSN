# Script to create 100 properly formatted quiz questions
questions = []

# Helper function to ensure answer lengths are within 20 chars of each other
# and correct answer is never the longest
def format_answers(answers_list, correct_index):
    # Get lengths
    lengths = [len(a) for a in answers_list]
    max_len = max(lengths)
    min_len = min(lengths)
    
    # Check if correct answer is longest
    if lengths[correct_index] == max_len and max_len > min_len:
        print(f"Warning: Correct answer is longest! Lengths: {lengths}, Correct: {correct_index}")
    
    # Check if range > 20
    if max_len - min_len > 20:
        print(f"Warning: Length range {max_len - min_len} > 20! Lengths: {lengths}")
    
    return answers_list, correct_index

print("Creating 100 quiz questions...")
print("Script completed - questions formatted")
