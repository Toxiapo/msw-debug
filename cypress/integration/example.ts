
describe('Book detail', () => {
 
  it('handles user authentication', () => {
		cy.interceptRequest(
			'GET',
			'https://jsonplaceholder.cypress.io/comments',
			(req, res, ctx) => {
				return res(ctx.json([{
					body: "Body",
					email: "Eliseo@gardner.biz",
					id: 1,
					name: "John Doe testing",
					postId: 1,
				}]))
			},
		) 
    cy.visit('/');
  })
})
export {}