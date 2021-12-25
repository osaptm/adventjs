#!/usr/bin/env python3
import requests


def get_challenge_stats(challenge_id):
    try:
        r = requests.get(f'https://adventjs.dev/api/get-users-completed-challenge?id={challenge_id}')
        return int(r.content or 0)
    except Exception as e:
        print(e)
    
    return 0


def main():
    for i in range(1, 26):
        challenge_id = str(i).zfill(2)
        stats = get_challenge_stats(challenge_id)
        print(challenge_id, stats)


if __name__ == '__main__':
    main()
