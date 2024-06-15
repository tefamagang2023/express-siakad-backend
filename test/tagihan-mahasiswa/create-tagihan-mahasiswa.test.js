const httpMocks = require("node-mocks-http");
const { createTagihanMahasiswa } = require("../../src/controllers/tagihan-mahasiswa");
const { TagihanMahasiswa } = require("../../models");

jest.mock("../../models");

describe("createTagihanMahasiswa", () => {
  let req, res, next;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
    jest.clearAllMocks();
  });

  it("should create tagihan mahasiswa and return 201", async () => {
    const mockRequestBody = {
      jumlah_tagihan: 500000,
      jenis_tagihan: "SPP",
      tanggal_tagihan: "2024-06-15",
      deadline_tagihan: "2024-07-15",
      status_tagihan: "Belum Lunas",
      id_periode: 1,
      id_registrasi_mahasiswa: 1,
    };

    req.body = mockRequestBody;
    const mockCreatedTagihanMahasiswa = {
      id: 1,
      ...mockRequestBody,
    };

    TagihanMahasiswa.create.mockResolvedValue(mockCreatedTagihanMahasiswa);

    await createTagihanMahasiswa(req, res, next);

    expect(TagihanMahasiswa.create).toHaveBeenCalledWith(mockRequestBody);
    expect(res.statusCode).toEqual(201);
    expect(res._getJSONData()).toEqual({
      message: "<===== CREATE Tagihan Mahasiswa Success",
      data: mockCreatedTagihanMahasiswa,
    });
  });

  it("should return 400 if required fields are missing", async () => {
    const mockRequestBody = {
      // Omitting required fields
    };

    req.body = mockRequestBody;

    await createTagihanMahasiswa(req, res, next);

    expect(res.statusCode).toEqual(400);
    expect(res._getJSONData()).toEqual({
      message: expect.stringContaining("is required"),
    });
    expect(TagihanMahasiswa.create).not.toHaveBeenCalled();
  });

  it("should handle errors", async () => {
    const mockRequestBody = {
      jumlah_tagihan: 500000,
      jenis_tagihan: "SPP",
      tanggal_tagihan: "2024-06-15",
      deadline_tagihan: "2024-07-15",
      status_tagihan: "Belum Lunas",
      id_periode: 1,
      id_registrasi_mahasiswa: 1,
    };

    req.body = mockRequestBody;
    const errorMessage = "Database error";
    const error = new Error(errorMessage);

    TagihanMahasiswa.create.mockRejectedValue(error);

    await createTagihanMahasiswa(req, res, next);

    expect(TagihanMahasiswa.create).toHaveBeenCalledWith({
      jumlah_tagihan: mockRequestBody.jumlah_tagihan,
      jenis_tagihan: mockRequestBody.jenis_tagihan,
      tanggal_tagihan: mockRequestBody.tanggal_tagihan,
      deadline_tagihan: mockRequestBody.deadline_tagihan,
      status_tagihan: mockRequestBody.status_tagihan,
      id_periode: mockRequestBody.id_periode,
      id_registrasi_mahasiswa: mockRequestBody.id_registrasi_mahasiswa,
    });
    expect(next).toHaveBeenCalledWith(error);
  });
});
